function textChanger(newString, span) {
  return new Promise((resolve, reject) => {
        
    //create arrays from strings
    const oldString = span.innerText
    const newStringArray = []
    const oldStringArray = []
    for (let i = 0; i < newString.length; i++) {
      newStringArray.push(newString[i])
    }
    for (let i = 0; i < oldString.length; i++) {
      oldStringArray.push(oldString[i])
    }
    newStringArrayLength = newStringArray.length
    oldStringArrayLength = oldStringArray.length

    //equalize string arrays
    if (newStringArrayLength < oldStringArrayLength) {
      for (let i = 0; i < oldStringArrayLength - newStringArrayLength; i++) {
        newStringArray.push(null)    
      }    
    }
    else if (newStringArrayLength > oldStringArrayLength) {
      for (let i = 0; i < newStringArrayLength - oldStringArrayLength; i++) {
        oldStringArray.push(null)      
      }
    }
    changedStringArray = oldStringArray
    i = 0 
    function change() {         
      setTimeout(function() {   
        changedStringArray[i] = newStringArray[i]
        changedString = changedStringArray.join('')
        span.innerText = changedString
        i++
        if (i < changedStringArray.length) {
          change()        
        } else {
          span.innerText = newString
          resolve()          
        }
      }, 1) //set interval
    }  
    change()    
  })
}

async function changeIdiom(idiom) {  
  for (let i = 0; i < document.querySelectorAll('.changeable-text').length; i++) {
    await textChanger((textContents[`line${i}`])[idiom], document.querySelector(`#line${i}`))
  }
}

export changeIdiom