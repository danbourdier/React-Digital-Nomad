
const musicPlayerNode = document.querySelector('#musicPlayer')
const locationPlayerNode = document.querySelector('#locationPlayer')

const config = { nodeName: true }

// target.nodeName
const callBack = ( mutationsList, observer ) => {
  console.log('mutation detected')
}

const observer = new MutationObserver( callBack )
observer.observe( locationPlayerNode, config )

// observer.disconnect()