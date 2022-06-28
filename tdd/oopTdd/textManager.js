class TextManager {
    constructor(){
        this.value = {data : 'Hello Lions!'};
    }

    getValue(){ // 값 가져옴
        return this.value.data;
    }

    setValue(newValue){ // 값 설정
        this.value = newValue;
    }
}