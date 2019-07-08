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
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true|
|e-mail|string|null: false|
|password|string|null: false|
|group_id|references|null: true, foreign_key:true|

## Association
has_many :groups, through: :members
has_many : messages
has_many :members


### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|


## Association
- has_many :users, through: :members
-has_many :members
-has_many_message


### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image_url|string|
|user_id|references|null :false,foreign_key:true|
|group_id|references|null:false,foreign_key:true|

## Association
- belong_to :user
- belong_to :group


