# Habitual experiments

===			

## Priors

### Prior 1

2 questions:

1. What percentage of the US population do believe has done X before?
2. For a typical person who has done X before, how frequently does he or she do X?

20 items:

Item |
---- |
1. Hikes | 
2. Runs |
3. Smokes |
4. Drives to work |
5. Bikes to work |
6. Vacations in Switzerland |
7. Eats granola for breakfast |
8. Plays computer games |
9. Writes novels | 
10. Writes poems | 
11. Drinks beer | 
12. Steals cars | 
13. Fails at things | 
14. Drinks wine with dinner | 
15. Eats meals with no meat | 
16. Murders people | 
17. Runs the mile in under four minutes | 
18. Wears contact lenses |
19. Walks to work | 
20. Worries about things |



### Prior 2

2 questions:

1. N out of every M (default to 1000) Americans has done X before.
2. For the typical **man or boy**, **woman or girl** who has done X before, how frequently does **he/she** do X? (default to year)

31 items:

Category | Item | 
---- | ----------|
Hobby | 1. Hikes | 
| 2. Runs | 
| 3. Plays the banjo | 
| 4. Plays tennis |
| 5. Climbs mountains| | 
Clothing | 6. Wears a suit | 
| 7. Wears a bra | 
| 8. Wears slacks | 
| 9. Wears socks | 
| 10. Wears a watch | 
Work | 11. Writes novels | 
| 12. Writes poems | 
| 13. Sells things on eBay | 
| 14. Sells companies | 
| 15. Steals cars| 
| 16. Steals chewing gum| 
| 17. Volunteers for soup kitchens |
| 18. Volunteers for political campaigns |
Entertainment | 19. Goes to the movies | 
| 20. Goes to the opera | 
| 21. Watches professional football |
| 22. Watches space launches | 
| 23. Listens to Pandora | 
| 24. Listens to live music | 
Food | 25. Eats peanut butter | 
| 26. Eats caviar | 
| 27. Drinks beer |
| 28. Drinks coffee | 
| 29. Smokes cigarettes | 
| 30. Smokes marijuana | 
| 31. Does cocaine | 


Results:

Overall quite good. Good variability.
Clothing is surprisingly homogeneous besides bra and suit (maybe "wears a hat" would have been slightly better than "wears a watch").

Women write poetry more frequently than men.

Default time window of 1 year might have interesting effects (e.g. on smoking, which if given the time window of a day, would be quite different)

Also, might include control trials (votes in every presidential election: 4 years)


## Truth judgments (S2 task)

### TJ1

Frequency levels in times / year -- 

Frequency level | Natural language version
---- | ------------------
0.01 | Once in a  life time
0.06 | 5 times in a life time
0.3 | 20 times in a life time
1 | Once a year 
6 | Twice a year
12 | Once a month
24 | Twice a month / biweekly
52 | Once a week
104 | Twice a week / biweekly
260 | Work week (5 times a week)
365 | Once a day

Percentiles are based on log-normal distributions of frequency of people who have done the action at least once.

Item | 25% | 50% | 75% 
---- | ------------------
1. Hikes | 1 | 4 | 13
2. Runs |  3 | 20 | 120
3. Smokes | 75 | 550 | 3042
4. Drives to work | 265 | 320 | 390
5. Bikes to work | 19 | 77 | 311
6. Vacations in Switzerland | 0.01 | 0.03 | 0.07
7. Eats granola for breakfast | 17 | 53 | 178
8. Plays computer games | 91 | 190 | 392
9. Writes novels | 0.06 | 0.3  | 1.8
10. Writes poems | 0.1 | 0.6 | 3.2
11. Drinks beer | 40 | 90 | 170
12. Steals cars | 0.007 | 0.05 | 0.4
13. Fails at things | 3.2 | 19.1 | 88.1

Translated into natural language:

Item | 25% | 50% | 75% 
---- | ------------------
1. Hikes | Once a year | 4 times a year | Once a month
2. Runs |  3 times a year | Twice a month | Twice a week
3. Smokes | Once a week | Once a day | Ten times per day
4. Drives to work | 5 times per week | 6 times per week | 7 times per week
5. Bikes to work | Once or twice a month | Once or twice a week | 6 times per week
6. Vacations in Switzerland | Once in a life time | Twice in a life time | 6 times in a life time
7. Eats granola for breakfast | Once or twice a month | Once a week | 3 times a week
8. Plays computer games | Twice a week | 4 times a week | Once a day
9. Writes novels | 5 times in a life time | 20 times in a life time  | Twice a year
10. Writes poems | 7 times in a life time | Once every other year | Three times a year
11. Drinks beer | Once a week | Twice a week | 3 times a week
12. Steals cars | Once in a life time | Five times in a life time | Once every other year
13. Fails at things | 3 times a year | Once or twice a month | Once or twice a week

Thoughts:

*Vacations in Switzerland* and *eats granola for breakfast* may be refocus the contrast class to *other places to vacation* and *other things to eat for breakfast*. 


### TJ2

12/29/15

Frequency levels in times / year -- 

Frequency level | Log freq | Natural language version
---- | ------------------
0.6 | -0.2 | 3 times in the past 5 years
3 | 0.5  | 3 times in the past year 
36 | 1.5 | 3 times in the past month
156 | 2.2 | 3 times in the past week


Interval times in days -- 

Frequency level | Log freq | Natural language version
---- | ------------------
2.3 | 0.85 | 3 times in the past week
10 | 2.3 | 3 times in the past month
121.7 | 4.8  | 3 times in the past year 
608.3 | 6.4 | 3 times in the past 5 years


Each item assigned some fixed interval to explore as much variance as possible.

Category | Item | levels
---- | ----------| --------
Hobby | 1. Hikes | | 
| 2. Runs | | 
| 3. Plays the banjo | | 
| 4. Plays tennis || 
| 5. Climbs mountains| | 
Clothing | 6*. Wears a suit | | 
| 7*. Wears a bra | | 
| 8. Wears slacks | | 
| 9*. Wears socks | | 
| 10. Wears a watch | | 
Work | 11. Writes novels | | 
| 12. Writes poems | | 
| 13. Sells things on eBay | | 
| 14. Sells companies | | 
| 15. Steals cars| | 
| 16. Steals chewing gum| | 
| 17. Volunteers for soup kitchens | | 
| 18. Volunteers for political campaigns | | 
Entertainment | 19. Goes to the movies | | 
| 20. Goes to the opera | | 
| 21. Watches professional football | | 
| 22. Watches space launches | | 
| 23. Listens to Pandora | | 
| 24. Listens to live music | | 
Food | 25. Eats peanut butter | | 
| 26. Eats caviar | | 
| 27*. Drinks beer | | 
| 28*. Drinks coffee | | 
| 29. Smokes cigarettes | | 
| 30. Smokes marijuana | | 
| 31*. Does cocaine | | 

*Items presented with both male and female characters, for each participant

Details

+ 37 items / participant.
+ Each item randomly assigned to a frequency level (one of the 4 above), though not all frequency levels were used for each item because *a priori* they seemed uninformative

Task took me 5m. Paying $0.55.

n = 150

cost = 150 * 0.55 = $82.5 + $16.5 = $99

### TJ3: Enabling and preventative conditions

Design: 21 of the 31 items from TJ2. Picked the frequency level that people that had the most intermediate responses (1 per item), in order to allow for the largest deviations from baselin. 

Each participant saw each of the 21 items randomly assigned to one of three conditions.

1.  Baseline (same as TJ2)
2. Enabling -- extra sentence about the actor making a plan to do the action again in the future
3. Preventative -- extra sentence about how the actor is unable or unwilling to do the action again in the future

I expect preventative to have a larger effect than enabling because in some sense: "the proof is in the pudding" (talk is cheap, I want to wait until you do something before I say you do it). The preventative items were chosen to be very strong and in some cases -- horrific (losing limbs). It's not clear if some of my preventative items will have an effect because they are more about actors' intentions as opposed to their capabilities (some intensions, while good, are hard to follow through with).


I plan to collect approximately 50 participants of data for each item X condition.
Task took me 4m (with distractions). Paying $0.4.

n  = 50 x 3 conditions = 150

cost = 150 * 0.4 = 60 + 12 = 72


