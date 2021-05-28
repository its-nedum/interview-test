/*
    The SQL query:
        count(CITY) - return the number of all the table rows (N)
        count(distinct CITY) - returns the number of all distinct row (N')
        and then (N') is subtracted from (N) and the difference (a number) will be returned

*/

select (count(CITY) - count(distinct CITY)) from STATION;