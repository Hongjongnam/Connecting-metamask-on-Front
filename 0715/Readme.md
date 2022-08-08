## jongstoken 발행

- Token 발행 전 mapping에 대한 설명좀 길게 하셨습니다.
- 그냥 typescript로 타입지정하는걸 solidity에서는 mapping하는것과 같다고 보면 편할듯!
- 아래는 예시코드 !

```typescript
interface balance {
  address: string;
  amount: number;
}

interface token {
  name: string;
  symbol: string;
  balances: balance[];
}
```

```solidity
string public balances; 원래 이렇게 들어가고
mapping(string=>uint256) public balances; 이건 typescript처럼 타입지정해주는거야~

mapping(string=>uint256) 이 내용을 javascript로 표현하자면 일단 객체다
{
    객체 속성값 : 객체 벨류값
    "메롱" : 50 // mapping은 이런느낌
}

```

```solidity
address public user // 0x12423rgregh3r9ut2y4hir23hur4iu 이런거
address = 20byte

개인키 64글자 32byte

account 40글자 / 20 byte

```

```
mapping(address=>uint256) public balances;
{
    "0x..." : 1000 // 어떤 계정이 얼마를 갖고있다~ public이기때문에 게터함수이다~
}
```

balances["0x..] // 1000 출력

```typescript

    class Jongs(){
        public value : string
        constructor(_value:string){
            value = _value;
        }
    }

```
