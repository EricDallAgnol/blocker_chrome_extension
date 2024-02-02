# :no_entry: Website Blocker Chrome Extension

Interested in how to enhance my productivity and some time management strategies. I've decided to build my own social media blocker chrome extension to eliminate (some) distractions.

You want to know more about the context and I how built it ?

:point_right: Please check out my [article](https://medium.com/@ericdall/eliminate-distractions-and-achieve-more-3-steps-to-implement-a-simple-social-media-blocker-4e7a37f1719f) !


-------

## :lock: Configure domains you want to block
This Chrome extension, when activated, blocks defined websites. By default, in this code, Youtube and Facebook are blocked, however you can easily add new ones by editing the variable `websiteListToBlock` in the `service_worker.js` file


## :page_facing_up: Default HTML page
When a website is blocked, the browser redirects by default to a pre-defined HTML page. Feel free to put your own so that, when you are tempted to watch a youtube short for instance, this page will put you back on the right path !

Currently, this would look like this :

![image](https://github.com/EricDallAgnol/blocker_chrome_extension/assets/83015366/64b5442a-968c-4152-809a-3058f2875456)
