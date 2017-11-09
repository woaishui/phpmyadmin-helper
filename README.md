# phpmyadmin-helper
Automatic form filling on phpmyadmin login page.

## Operation
![Operation Demonstration](https://raw.githubusercontent.com/zhaoxingya/phpmyadmin-helper/master/demo.gif "Operation Demonstration")

## Usage
1. git clone https://github.com/zhaoxingya/phpmyadmin-helper.git
2. Enter "chrome://extensions/" in the chrome address bar
3. Check developer mode
4. Load unpacked extension…
5. Select the folder cloned to "open"
6. Configure your account information：Modify path/to/phpmyadmin-helper/secret.json, for example：

> The `dbname` is a tag that you use to identify which database, the `user` is your DB username, and the `pwd` is your DB password. Of course, you can configure multiple database options in this array.

```json
[
  {
    "dbname": "localhost",
    "user": "root",
    "pwd": "root"
  },
  {
    "dbname": "another DB",
    "user": "your login username",
    "pwd": "your login password"
  }
]
```
