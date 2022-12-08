# Table of contents

- [Table of contents](#table-of-contents)
- [Architecture](#architecture)
  - [Context](#context)
  - [Application sections](#application-sections)
  - [Data schema](#data-schema)
- [Guidance](#guidance)
  - [ID naming convention](#id-naming-convention)
  - [Text translations](#text-translations)

# Architecture


## Context

![Context](./assets/context.png)

| System/Actor | Description |
|-|-|
| Livemap | Integration with livemap system to get data points |
| Map| Offline map (Open Street map/Here maps)|
| User | App user |
| Phone | Call 112 |


## Application sections

![App sections](./assets/structure.png)



## Data schema

![Schema](./assets/schema.png)

| Property | Description |
|-|-|
| QuestionId | Question Id|
| Navigation | Navigation object |
| Previous | If the property is set to true, arrow to the left is displayed |
| Next | If the property is set to true, arrow to the left is displayed |
| Answer | Array of possible answers to the question |
| AnswerId | Answer Id|
| QuestionId | The Id of the question to which the user is redirected in case the answer is selected |
| Clickable |  |
| Color | Answer color code in hex format |
| Image | Image name which should be displayed |
| Content (array) |  |
| ContentId | ContentId |
| Type | Content type. Possible values TEXT, TIMER |
| Text | Content text |
| Clickable | Set to true if content is clickable |
| Parameters | Array of content parameters |


# Guidance

## ID naming convention

QuestionId should be generated based on this pattern: SHORTPAGENAME_NR

Example:
```
ENVIRONMENT_1
```

AnswerId or ContentId should be generated based on this pattern: QUESTIONID_SHORTNAME_NR

Example:
```
ENVIRONMENT_1_ELECTRICITY_1
```

## Text translations

The translations to multiple languages will be handled with i18next library: https://react.i18next.com/ .
The translations will be writting in translation properties files in json format:
```
{
    "ENVIRONMENT_1": "Ar aplinka saugi",
    "ENVIRONMENT_1_ELECTRICITY_1": "Eletros laidai"
}

```