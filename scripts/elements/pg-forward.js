module.exports = class extends HTMLElement {    
    constructor(){
        super();
        let sha = this.attachShadow({mode: 'open'});

        sha.innerHTML = '<img src="'+IconSet.getDir("rightArrow")+'" height="25" width="25" />'
    }

    connectedCallback(){
        this.addEventListener('click',pgForward);
    }
}