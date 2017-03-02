MongoDB (Ubuntu 16.04)

Source : https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=1.34925153.1562600274.1484908965

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt update

sudo apt-get install -y mongodb-org

Start

sudo service mongod start

Check Log

/var/log/mongodb/mongod.log

Stop

sudo service mongod stop

Restart

sudo service mongod restart
