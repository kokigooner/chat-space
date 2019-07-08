# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|e-mail|string|null: false|
|password|string|null: false|
|group_id|references|null: true, foreign_key:true|

##Asociation
has_many :group, through: :members
has_many : message


###groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|user_id|string|null:false, foreign_key:true|

## Association
- has_many :member, through: :members


###messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null:true|
|image_url|string|null:true, foreign_keytrue|
|user_id|integer|null: false,foreign_key:true|

##Asociation
- belong_to :user


