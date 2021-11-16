interface Lesson {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  html: string;
}

interface Group {
  description: string;
  lessons: string[];
  image: string;
  slug: string;
  title: string;
}
