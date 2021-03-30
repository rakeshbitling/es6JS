userLeft = true;
userWatchingCatMeme = false;

function watchTutorial() {
    return new Promise((resolve,reject)=>{
        if(userLeft) {
            reject({
                name : `User Left`,
                message : ':('
            })    
        } 
        if(userWatchingCatMeme){ 
            reject({
                name : `User Watching Cat meme`,
                message : 'WebSimplified < Cat'
            })
        }        
        resolve ('Thumbs up and subscribe');        
    });
}

watchTutorial()
.then(resolve  => console.log(resolve))
.catch(err => console.log(err))