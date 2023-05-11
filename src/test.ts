function isGreeting(msg: string): msg is Greeting {
    return ['hello', 'hi'].includes(msg);
}

type Greeting = 'hello' | 'hi';

function hi(msg: string): void {
    if (!isGreeting(msg)) {
        console.log('NOT VALID');
        return;
    }
    console.log(msg);
}

hi('hii');