import {readFileSync, readdirSync, writeFileSync} from 'fs';
import frontmatter from 'front-matter';
import {resolve} from 'path';

const INPUT_PATH = resolve('copyriting/groups');
const OUTPUT_PATH = resolve('groups.json');

buildPostsContent();

export function buildPostsContent(input: string = INPUT_PATH): any[] {
  const postsDirSourceMap = readdirSync(input);
  const postsContentList = postsDirSourceMap.reduce(postContentBuilder(input), []);

  if (!isTest()) {
    writeFileSync(OUTPUT_PATH, stringify(postsContentList));
  }

  return postsContentList;
}

function postContentBuilder(input: string) {
  return (acc: any[], postPath: string) => {
    if (isPost(postPath)) {
      const postContentMd = readFileSync(resolve(input, postPath), 'utf-8');

      const postContentJson = frontmatter<any>(postContentMd);

      validatePostAttributes(postContentJson.attributes);

      acc.push({...postContentJson.attributes, slug: postPath.split('.')[0]});
    }

    return acc;
  };
}

function validatePostAttributes(_: any): void {}

function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}

function stringify(data: object): string {
  return JSON.stringify(data, null, 2);
}

function isPost(path: string): boolean {
  return /.md$/.test(path);
}
