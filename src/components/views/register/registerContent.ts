export const renderRegiserContent = (): string => `
<div class="wrapper">
<form class="form" action="">
  <div class="item">
    <label for="GET-name">Name:</label>
    <input id="GET-name" type="text" name="email">
  </div>
  <div class="item">
    <label for="GET-email">Email:</label>
    <input id="GET-email" type="text" name="email">
  </div>
  <div class="item">
    <label for="GET-password">Пароль:</label>
    <input id="GET-password" type="text" name="password">
  </div>
  <input type="submit" value="Регистрация">
</form>
</div>
`;