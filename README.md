# pronunciation-ui
user interface for searching and administering pronunciation data


## Find by User ID or First or Last name
https://name-svc-mh6ib2ntwq-uc.a.run.app/findEmployee/jo

```json
[
    {
        "firstName": "Jose",
        "lastName": "Aldo",
        "preferredName": "Ho-say",
        "preferredPreset": "US",
        "preferredSpeed": 3,
        "active": true
    },
    {
        "firstName": "John",
        "lastName": "Glynn",
        "preferredName": "johnny",
        "preferredPreset": "US-ROBOT-1",
        "preferredSpeed": 4,
        "active": true
    }
]
```
## Get by ID
https://name-svc-mh6ib2ntwq-uc.a.run.app/employee/John-Glynn
```json
    {
        "firstName": "John",
        "lastName": "Glynn",
        "preferredName": "johnny",
        "preferredPreset": "US-ROBOT-1",
        "preferredSpeed": 4,
        "active": true
    }
```

## Update Preferences
https://name-svc-mh6ib2ntwq-uc.a.run.app/employeePreferences/John-Glynn

```json
{
    "preferredName": "johnny",
    "preferredPreset": "US-ROBOT-1",
    "preferredSpeed": 4
}
```
