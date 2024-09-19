/**
 * Class 선언하기
 */
class SampleClass {}

class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduc() {
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}회 다운로드 된 게임입니다.`;
  }
}

const starcraft = new Game("StarCraft", "USA", 12314123);

const retVal = starcraft.introduc(); // const retVal: string
console.log(retVal);
