nxk
===

Next Knowledge dev CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nxk.svg)](https://npmjs.org/package/nxk)
[![Codecov](https://codecov.io/gh/andrewrosss/nxk/branch/master/graph/badge.svg)](https://codecov.io/gh/andrewrosss/nxk)
[![Downloads/week](https://img.shields.io/npm/dw/nxk.svg)](https://npmjs.org/package/nxk)
[![License](https://img.shields.io/npm/l/nxk.svg)](https://github.com/andrewrosss/nxk/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nxk
$ nxk COMMAND
running command...
$ nxk (-v|--version|version)
nxk/0.0.1 darwin-x64 node-v14.16.0
$ nxk --help [COMMAND]
USAGE
  $ nxk COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nxk firebase:alias:add ALIAS PROJECT_ID SERVICE_ACCOUNT`](#nxk-firebasealiasadd-alias-project_id-service_account)
* [`nxk firebase:alias:list`](#nxk-firebasealiaslist)
* [`nxk firebase:auth:claims:list UID`](#nxk-firebaseauthclaimslist-uid)
* [`nxk firebase:auth:claims:set UID PATH VALUE`](#nxk-firebaseauthclaimsset-uid-path-value)
* [`nxk firebase:auth:user:get UID`](#nxk-firebaseauthuserget-uid)
* [`nxk firebase:auth:user:update UID PATH VALUE`](#nxk-firebaseauthuserupdate-uid-path-value)
* [`nxk firebase:config:get PATH`](#nxk-firebaseconfigget-path)
* [`nxk firebase:config:set PATH VALUE`](#nxk-firebaseconfigset-path-value)
* [`nxk firebase:config:show`](#nxk-firebaseconfigshow)
* [`nxk firebase:config:unset PATH`](#nxk-firebaseconfigunset-path)
* [`nxk firebase:firestore:collection:getAll COLLECTIONPATH`](#nxk-firebasefirestorecollectiongetall-collectionpath)
* [`nxk firebase:use [ALIAS]`](#nxk-firebaseuse-alias)
* [`nxk help [COMMAND]`](#nxk-help-command)
* [`nxk mailchimp:alias:add ALIAS SERVER AUDIENCEID APIKEY`](#nxk-mailchimpaliasadd-alias-server-audienceid-apikey)
* [`nxk mailchimp:lists:getListMember [FILE]`](#nxk-mailchimplistsgetlistmember-file)
* [`nxk mailchimp:lists:getListMergeFields [LISTID]`](#nxk-mailchimplistsgetlistmergefields-listid)
* [`nxk mailchimp:subscriberHash [FILE]`](#nxk-mailchimpsubscriberhash-file)

## `nxk firebase:alias:add ALIAS PROJECT_ID SERVICE_ACCOUNT`

Add an alias to reference a project

```
USAGE
  $ nxk firebase:alias:add ALIAS PROJECT_ID SERVICE_ACCOUNT

ARGUMENTS
  ALIAS            A short name to reference this project by
  PROJECT_ID       The GCP Project ID
  SERVICE_ACCOUNT  The service account to use when this alias is active

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/alias/add.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/alias/add.ts)_

## `nxk firebase:alias:list`

Display all of the saved project aliases

```
USAGE
  $ nxk firebase:alias:list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/alias/list.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/alias/list.ts)_

## `nxk firebase:auth:claims:list UID`

List any custom claims associated with a user

```
USAGE
  $ nxk firebase:auth:claims:list UID

ARGUMENTS
  UID  The uid of the user of which to get the custom claims

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/auth/claims/list.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/auth/claims/list.ts)_

## `nxk firebase:auth:claims:set UID PATH VALUE`

Set a custom claim on a user

```
USAGE
  $ nxk firebase:auth:claims:set UID PATH VALUE

ARGUMENTS
  UID    The uid of the user
  PATH   The object path for the claim
  VALUE  The value of this claim. If the value is null this claim is removed.

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/auth/claims/set.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/auth/claims/set.ts)_

## `nxk firebase:auth:user:get UID`

Update a firebase UserRecord

```
USAGE
  $ nxk firebase:auth:user:get UID

ARGUMENTS
  UID  The uid of the userRecord to retrieve

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/auth/user/get.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/auth/user/get.ts)_

## `nxk firebase:auth:user:update UID PATH VALUE`

Update a firebase UserRecord

```
USAGE
  $ nxk firebase:auth:user:update UID PATH VALUE

ARGUMENTS
  UID    The uid of the userRecord to update
  PATH   The property path/key to update
  VALUE  The updated value

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/auth/user/update.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/auth/user/update.ts)_

## `nxk firebase:config:get PATH`

Get a particular configuration value

```
USAGE
  $ nxk firebase:config:get PATH

ARGUMENTS
  PATH  The dotted path of the config variable to get

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/config/get.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/config/get.ts)_

## `nxk firebase:config:set PATH VALUE`

Set a particular configuration value

```
USAGE
  $ nxk firebase:config:set PATH VALUE

ARGUMENTS
  PATH   The dotted path of the config variable to get
  VALUE  The value to set for this config parameter.

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/config/set.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/config/set.ts)_

## `nxk firebase:config:show`

Show the current config (contents of .nxkrc.json)

```
USAGE
  $ nxk firebase:config:show

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/config/show.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/config/show.ts)_

## `nxk firebase:config:unset PATH`

describe the command here

```
USAGE
  $ nxk firebase:config:unset PATH

ARGUMENTS
  PATH  The dotted path of the config variable to get

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/config/unset.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/config/unset.ts)_

## `nxk firebase:firestore:collection:getAll COLLECTIONPATH`

describe the command here

```
USAGE
  $ nxk firebase:firestore:collection:getAll COLLECTIONPATH

ARGUMENTS
  COLLECTIONPATH  The path to the collection

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/firebase/firestore/collection/getAll.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/firestore/collection/getAll.ts)_

## `nxk firebase:use [ALIAS]`

Use the project/credentials associated with an alias

```
USAGE
  $ nxk firebase:use [ALIAS]

OPTIONS
  -c, --show-current  List the alias currently in use and exit
  -h, --help          show CLI help
```

_See code: [src/commands/firebase/use.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/firebase/use.ts)_

## `nxk help [COMMAND]`

display help for nxk

```
USAGE
  $ nxk help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `nxk mailchimp:alias:add ALIAS SERVER AUDIENCEID APIKEY`

describe the command here

```
USAGE
  $ nxk mailchimp:alias:add ALIAS SERVER AUDIENCEID APIKEY

ARGUMENTS
  ALIAS       The alias to which this config will be associated
  SERVER      The mailchimp server location (ex: 'us1')
  AUDIENCEID  The audience/list ID to associate with this alias
  APIKEY      The API key to use when configuring the client.

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mailchimp/alias/add.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/mailchimp/alias/add.ts)_

## `nxk mailchimp:lists:getListMember [FILE]`

describe the command here

```
USAGE
  $ nxk mailchimp:lists:getListMember [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mailchimp/lists/getListMember.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/mailchimp/lists/getListMember.ts)_

## `nxk mailchimp:lists:getListMergeFields [LISTID]`

describe the command here

```
USAGE
  $ nxk mailchimp:lists:getListMergeFields [LISTID]

ARGUMENTS
  LISTID  The audience/list ID from which to get the merge fields. If not specified the audienceId associated with the
          active alias is used.

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mailchimp/lists/getListMergeFields.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/mailchimp/lists/getListMergeFields.ts)_

## `nxk mailchimp:subscriberHash [FILE]`

describe the command here

```
USAGE
  $ nxk mailchimp:subscriberHash [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mailchimp/subscriberHash.ts](https://github.com/andrewrosss/nxk/blob/v0.0.1/src/commands/mailchimp/subscriberHash.ts)_
<!-- commandsstop -->
