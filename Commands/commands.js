# ADD  ONLY   | PROD

mongoimport --db mean --collection properties --jsonArray --file 

mongoimport --db mean --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --jsonArray --file new_users.json




# ADD and DROP  | PROD
mongoimport --db mean --collection properties --drop --jsonArray --file 
mongoimport --db mean --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --drop --jsonArray --file new_users.json







# ADD  ONLY   | DEV
mongoimport --db mean-dev --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --jsonArray --file new_users.json






# ADD and DROP  | DEV 
mongoimport --db mean-dev --collection properties --drop --jsonArray --file 

mongoimport --db mean-dev --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --drop --jsonArray --file new_users.json




#  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT 
# PROD 

mongoexport --jsonArray --db mean --collection properties  --out export/export-1-12-3.json



# LOCAL - MAC
mongoexport --jsonArray --db mean-dev --collection properties  --out new_properties.json
mongoexport --jsonArray --db mean-dev --collection users  --out new_users.json

mongoexport --jsonArray --db mean-dev --collection articles  --out export-articles.json

# LOCAL IMPORT 

mongoimport --db mean-dev --collection properties --drop --jsonArray --file export-properties.json
mongoexport --jsonArray --db mean-dev --collection properties  --out export-properties.json




sub .zshrc 
sudo vim .bash_profile
=====


alias ladd='mongoimport --db mean-dev --collection properties --jsonArray --file '
alias ladd-d='mongoimport --db mean-dev --collection properties --drop --jsonArray --file '

alias sadd='mongoimport --db mean --collection properties --jsonArray --file '
alias sadd-d='mongoimport --db mean --collection properties --drop --jsonArray --file '


alias lex='mongoexport --jsonArray --db mean-dev --collection properties  --out '
alias sex='mongoexport --jsonArray --db mean --collection properties  --out '




Mongo search :
http://stackoverflow.com/questions/10610131/checking-if-a-field-contains-a-string

db.properties.findOne({"comments" : {$regex : ".*homo.*"}});
db.properties.findOne({"agent_name" : {$regex : ".*test guy.*"}});

db.properties.findOne({"address" : {$regex : ".* 244 *"}});















