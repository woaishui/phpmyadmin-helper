# phpmyadmin-helper
Automatic password filling on phpmyadmin login page.

## Usage
1. git clone https://github.com/zhaoxingya/phpmyadmin-helper.git
2. Enter "chrome://extensions/" in the chrome address bar.
3. Check developer mode.
4. Load unpacked extension…
5. Select the folder cloned to "open"
6. Configure your password：Modify path/to/phpmyadmin-helper/secret.json, for example：

- name-> database name  
- sec -> your password

```json
[{
    "name": "localhost",
    "sec": "root"
},
{
    "name": "61 data base",
    "sec": "123456"
},
{
    "name": "38",
    "sec": "abcdefg"
}]
```
