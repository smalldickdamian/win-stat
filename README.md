*This project runs on any operating system ideally such as macOS and Linux, but was only ever tested on Windows.*
# Windows Statistics
This is a simple web daemon that returns information about your Windows system.

## Project Lore
There isn't quite a "lore" for this project but it is something that I wrote while I was bored one summer evening. The idea of this daemon is to be more transparent and informative when it comes to returning information about your Windows system.

It returns information such as your CPU model, and some general networking information. In the future, I intend on adding more functionality such as returning GPU information.

## Installing & Running
Wherever you wish to store **your own instance of this project**, such as your desktop or documents folder... run the following command:
```sh
git clone https://github.com/smalldickdamian/win-stat.git
```
What this command does is *clone* the repository from GitHub, and put it in a folder named `win-stat`. 

From there on, you can run the following commands and everything will be hunky dory.
```sh
cd win-stat
npm install --save
node app.js
```
What these commands do is:
- Changes the active directory to `win-stat`, the folder the `git clone` command created.
- Installs the required dependencies/packages to run win-stat.
- Starts the core file, making it accessible on the localhost in your desired web browser.

## Accessing Web Daemon
You can access the daemon through your desired web browser by entering http://localhost:3030 in the address field. If you have something listening on the "required" port you can change it at the last line in `app.js`. It's simplistic!

## Upcoming Features
As aforementioned the plan is to add more functionality such as returning GPU information. There is no ETA of when this will be completed, but I will get it done as fast as humanly possible.

## Support
If you need support with this please open an issue!
