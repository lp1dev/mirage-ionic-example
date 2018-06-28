export default {
    "name": "ExampleGame",
    "theme": "default",
    "startInstruction": "GOTO INTRO",
    "questions": [
        {
            "id": "INTRO",
            "text": "Hey how are you doing?",
            "answers": {
                "Fine!": "GOTO GOOD",
                "Not so good.": "GOTO NOT_GOOD"
            }
        },
        {
            "id": "GOOD",
            "text": "Great! Let's play a little game then.\nWould you play as a human or a dog character?",
            "answers": {
                "A human obviously!": "SET PLAYER HUMAN; GOTO GAME_START",
                "A dog!!!": "SET PLAYER DOG; GOTO GAME_START"
            }
        },
        {
            "id": "NOT_GOOD",
            "text": "Oh. Maybe playing a little game will cheer you up?\nWould you rather be a dog or a human?",
            "answers": {
                "What kind of question is that? Human obviously!": "SET PLAYER HUMAN; GOTO GAME_START",
                "Woof!": "SET PLAYER DOG; GOTO GAME_START"
            }
        },
        {
            "id": "GAME_START",
            "text": "You are alone in small kitchen.\nThere is a pie on the table and no one seems around.\nWhat do you want to do?",
            "answers": {
                "I eat the pie!": "GOTO QUESTION3",
                "I stay quiet and don't touch the pie.": "GOTO QUESTION2",
                "I say 'Hi, is there someone?'": "IF PLAYER IS HUMAN THEN GOTO QUESTION2_SCREAM ELSE GOTO QUESTION2_DOG_SCREAM"
            }
        },
        {
            "id": "QUESTION2",
            "text": "The pie really smells good and apparently no one's looking.\nAre you sure you dont want to take a little bite?",
            "answers": {
                "Fine, I'll eat your damn pie!": "GOTO QUESTION3",
                "No.": "ADD PIE 1; IF PIE >= 10 THEN GOTO QUESTION2_NOPIE ELSE GOTO QUESTION2"
            }
        },
        {
            "id": "QUESTION2_NOPIE",
            "text": "Fine! You're a good boy and don't eat the pie.\nDoes it make you feel good about yourself? I hope so!",
            "answers": {
                "Ok... Let's continue": "GOTO QUESTION3"
            }
        },
        {
            "id": "QUESTION2_SCREAM",
            "text": "You scream but no one is answering.\nYou can try to leave or maybe reconsider eating the pie?",
            "answers": {
                "Fine, I'll eat your damn pie!": "GOTO QUESTION3",
                "Let's leave": "GOTO QUESTION3"
            }
        },
        {
            "id": "QUESTION2_DOG_SCREAM",
            "text": "You scream 'WOOF WOOOooOOF' but no one is answering for the moment.\nThere is a door on the other side of the room, you can try to leave or maybe reconsider eating the pie?",
            "answers": {
                "Fine, I'll eat your damn pie!": "GOTO QUESTION3",
                "Let's leave": "IF PLAYER IS HUMAN THEN GOTO QUESTION3 ELSE GOTO QUESTION3_DOG",
                "Let's woof again!": "ADD WOOFS 1; IF WOOFS > 5 THEN GOTO QUESTION3"
            }
        },
        {
            "id": "QUESTION3_DOG",
            "text": "You try to open the door but you can't with your dog paws!\nYou are going to get stuck in this room forever.",
            "answers": {
                "Woof again!": "GOTO QUESTION2_DOG_SCREAM"
            }
        },
        {
            "id": "QUESTION3",
            "text": "The kitchen's wooden door opens and you find a big red haired man behind, standing in the middle of a long corridor.\nHe looks at you, surprised and yells:\n- Hey! What are you doing here? Did you break in to eat my delicious pie?!",
            "answers": {
                "Run!": "GOTO QUESTION4",
                "Say: Good evening! I don't exactly know how I ended up in your kitchen but I'm sure there is a logical explanation!": "IF PLAYER IS DOG THEN GOTO QUESTION5_DOG ELSE GOTO QUESTION5"
            }
        },
        {
            "id": "QUESTION4",
            "text": "As you push him and run for the end of the corridor he gets up and throws his shoe at you!",
            "answers": {
                "Dodge!": "ROLL 10 DODGE;IF DODGE > 5 THEN GOTO QUESTION4_FAILED ELSE GOTO QUESTION6",
                "Keep running!": "GOTO QUESTION4_FAILED"
            }
        },
        {
            "id": "QUESTION4_FAILED",
            "text": "You get hit by the shoe, trip and fall flat on the carpet. He beats you up. YOU DIE!",
            "answers": {
                "Restart": "GOTO INTRO; SET WOOF 0; SET PIE 0"
            }
        },
        {
            "id": "QUESTION5",
            "text": "He doesn't look surprised anymore but unfortunately seems quite angry. He takes his military boot off and move towards you, holding it firmly in your hand with a menacing glare",
            "answers": {
                "Time to run!": "GOTO QUESTION4",
                "Say : Wait, I'm sure we can talk this through!": "GOTO QUESTION4_FAILED"
            }
        },
        {
            "id": "QUESTION5_DOG",
            "text": "You woof at him in a friendly way. He doesn't look surprised anymore but unfortunately seems quite angry. He takes his military boot off and move towards you, holding it firmly in your hand with a menacing glare",
            "answers": {
                "Time to run!": "GOTO QUESTION4",
                "Say : Wait, I'm sure we can talk this through!": "GOTO QUESTION4_FAILED"
            }
        },
        {
            "id": "QUESTION6",
            "text": "This is the end of this demo game!\nThanks for playing.\nI hope you learned how Mirage engine is working and that you've had fun!\n\nLp1.",
            "answers": {
                "Restart the game": "GOTO INTRO; SET WOOF 0; SET PIE 0"
            }
        }
    ]
}