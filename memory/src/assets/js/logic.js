import Main from "../../components/main"
const click = {
    array: [],
    score: 0,
    check: (num) => {
//ONLY FIRES ON CLICK!
        if (!click.array[0]){
            click.array.push(parseInt(num))
            click.score += 1
        } else {
            for( var i = 0; i < click.array.length; i++){
                
                if (click.array[i] === num && click.score !== 12){
                    alert("Oops! \nYou've already clicked that one! :'( \nTry again!");
                    click.end()
                } else if ( click.array[i] !== num && i === ( click.array.length - 1 )){
                    click.array.push(parseInt(num));
                    click.score += 1;
                    if (click.score === 12){
                        alert("Congratulations! \n      You managed to click on all of them! \n             Well done!")
                        click.end();
                        break
                    }
                    break
                }
                
            }
        }

        console.log(click.array);
    },
    end: () => {
        click.score = 0;
        click.array = [];
    }
}

export default click;