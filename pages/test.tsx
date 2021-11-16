import TelegramLoginButton, {TelegramUser} from 'telegram-login-button';

export default function TestPage(): JSX.Element {
  return (
    <>
      <div>
        <TelegramLoginButton
          botName="viktorkutestbot"
          dataOnauth={(user: TelegramUser) => console.log(user)}
        />
        ,
      </div>
    </>
  );
}
