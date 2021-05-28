/*
    The SQL query:
        count(CITY) - return the number of all the city rows (N) from the STATION table
        count(distinct CITY) - returns the number of all distinct city rows (N') from the STATION table
        and then (N') is subtracted from (N) and the difference (a number) will be returned

*/

select (count(CITY) - count(distinct CITY)) from STATION;