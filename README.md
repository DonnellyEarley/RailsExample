# Welcome to my Ruby on Rails example!

Details on running this rails server (Windows environment):  

Ruby version  
**ruby 3.2.2**

System dependencies  
**[See for yourself](https://github.com/DonnellyEarley/RailsExample/blob/master/Gemfile)**

Configuration  
**[See for yourself](https://github.com/DonnellyEarley/RailsExample/blob/master/config/application.rb)**

## Deployment instructions  

Steps:
1. [Install Ruby](https://www.ruby-lang.org/en/downloads/) if you haven't already.
2. [Install Rails](https://rubyinstaller.org/downloads/) (click the top option under the 'WITH DEVKIT' section).
3. (Optional) [Install SQLite3](https://www.sqlite.org/download.html) (click the 'sqlite-tools....zip' under the 'Precompiled Binaries for Windows' section).
4. Clone this repo.
5. In console, cd to location you cloned this repo and run ``bundle install``.
6. Then run ``ruby bin/rails db:migrate``.
7. Then run ``rake assets:precompile``.
8. After everything above is complete, run the server by running ``ruby bin/rails server``.
9. The app will now be running on localhost:3000.

**ENJOY!**
