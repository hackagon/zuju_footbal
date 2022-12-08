# Documents from endpoint /matches

ZUJU_API_HOST: localhost:8000


## Get list of matches with pagination
```
curl --location --request GET '{{ZUJU_API_HOST}}/api/matches?page={{page}}&limit={{limit}}'

Example parameters:
page = 1
limit = 5
```

## Get list of matches on a specific adte:
```
curl --location --request GET '{{ZUJU_API_HOST}}/api/matches?date={{date}}'

Example parameters:
date = 2022-12-02
```

## Get list of matches by calendar
```
curl --location --request GET '{{ZUJU_API_HOST}}/api/matches/_calendar_?fromDate={{fromDate}}&toDate={{toDate}}'

Example parameters:
fromDate = 2022-12-02
toDate = 2022-12-09
```