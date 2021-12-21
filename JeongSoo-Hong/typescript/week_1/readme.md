# typescript study

---

## 1. Node.js

### 1.1 Node.js 란

크롬 V8 자바스크립트 엔진으로 빌드된 `자바스크립트 런타임`입니다.

- **런타임(Runtime)**: 실행 환경
  - browser, node,js, etc.
  
node.js를 다운로드 받으실 때 LTS(Long Term Support) 버전으로 받으시는 걸 추천 드립니다.
많은 라이브러리와 호환되어 오류 발생 가능성이 적음

---

## 2. npm

### 2.1 npm 이란

Node Package Manager

- 자바스크립트 프로그래밍 언어를 위한 패키지 관리자
- Node.js 개발자들이 패키지(모듈)의 설치 및 관리를 쉽게 하기 위해 도와주는 매니저(관리 도구)
  - 패키지(모듈) : 프로그램의 구성요소 중 특정 기능을 수행할 수 있는 코드의 집합(라이브러리)
- Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할 및 설치, 관리 제공

> Python의 pip
> Java의 Maven, Gradle(Android, React Native에서 많이 봤는데??? 그거 맞습니다.^^)
> PHP의 Composer
> Ruby의 RubyGems
> 레드햇 계열의 rpm, yum
> 데비안 계열의 dpkg, apt
> 맥 OS의 Homebrew

https://www.npmjs.com/

### 2.2 왜 npm 을 사용할까 ?

 1. 프로그램을 제작 시 어떤 기능을 구현할 때 자신이 직접 프로그래밍을 하지 않아도 동일한 기능의 남이 만들어놓은 코드를 쉽게 사용이 가능

 2. 코드의 재사용성이 높아지고 유지 보수가 쉬워질뿐더러 형상관리가 용이해짐
 3. cdn 에서 검색해서 받아오는 대신 npm install 로 패키지 설치가 빠르게 된다.

### 2.3 npm 명령어

#### 2.3.1 `npm -v` `npm --version`

npm 버전 확인

#### 2.3.2 `npm install -g npm`

npm 최신 버전으로 업그레이드

#### 2.3.3 `npm init [-y]`

`package.json`을 만드는 명령어

- `package.json` 현재프로젝트에서 사용중인 패키지 이름, 버전, 데이터, 의존성 등 메타 정보가 담긴 파일

```json
{
    "name": "my_package",
    "description": "npm init test",
    "version": "1.0.0",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/whd9425/hackers.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/whd9425/hackers/issues"
    },
    "homepage": "https://github.com/whd9425/hackers",
    "dependencies": {
        "typescript": "^4.5.4"
    }
}
```

`*` : Required

- `name` __*__

> 프로젝트 이름으로, 가장 중요합니다. 중앙 저장소에 배포할 때 version과 함께 필수 항목입니다.
> url로 사용되고, 설치할 때 디렉토리 이름이 되기 때문에 url이나 디렉터리에서 쓸 수 없는 이름을 사용하면 안 됩니다.
> 또한, 이름에 node나 js가 들어가면 안 됩니다.
> name은 214자보다 짧아야 하며, 점(.)이나 밑줄(_)로 시작할 수 없습니다.
> 대문자를 포함해서는 안 되며, require() 함수의 인수로 사용되며 짧고 알기 쉬운 것으로 짓는 것이 좋습니다.

- `version` __*__

> 패키지의 버전 
> <https://docs.npmjs.com/about-semantic-versioning>

- `desciption`

> 프로젝트 설명으로, 문자열로 기술합니다.
> npm search로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 됩니다.

- `keywords`

> 프로젝트를 검색할 때 참조되는 키워드입니다.
> description과 마찬가지로 npm search로 검색된 리스트에 표시됩니다.

- `homepage`

> 프로젝트 홈페이지 주소입니다.
> url 항목과는 다르며, url을 설정하면 예상치 못한 움직임을 하게 되므로 주의합니다.

- `author`

> 프로젝트 작성자 정보로, 한 사람만을 지정합니다. JSON 형식으로 name, email, url 옵션을 포함합니다.

- `contributors`

> 프로젝트에 참여한 공헌자 정보로, 여러 사람을 배열로 지정할 수 있습니다.

- `repository`

> 프로젝트의 소스 코드를 저장한 저장소의 정보입니다.
> 소스 코드에 참여하고자 하는 사람들에게 도움이 될 수 있습니다. 프로젝트의 홈페이지 url을 명시해서는 안 됩니다.

- `scripts`

> 프로젝트에서 자주 실행해야 하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능합니다.

- `config`

> 소스 코드에서 config 필드에 있는 값을 환경 변수처럼 사용할 수 있습니다.

- `private`

> 이 값을 true로 작성하면 중앙 저장소로 저장하지 않습니다.

- `dependencies`

> 프로젝트 의존성 관리를 위한 부분입니다. 이 프로젝트가 어떤 확장 모듈을 요구하는지 정리할 수 있습니다.
> 일반적으로 package.json에서 가장 많은 정보가 입력되는 곳입니다.
> 애플리케이션을 설치할 때 이 내용을 참조하여 필요한 확장 모듈을 자동으로 설치합니다.
> 따라서 개발한 애플리케이션이 특정한 확장 모듈을 사용한다면 여기에 꼭 명시를 해주어야 합니다.
> 또한, npm install 명령은 여기에 포함된 모든 확장 모듈들을 설치하게 되어 있습니다.

- `devDependencies`

> 개발할 때만 의존하는 확장 모듈을 관리합니다.

- `engine`

> 실행 가능한 노드 버전의 범위를 결정합니다.

#### 2.3.4 `npm install`

`npm install 패키지[@버전]`
`npm install 주소`

- `npm install typescript --save | -S`
  - `dependencies`에 추가

- `npm install typescript --save-dev | -D`
  - `devDependencies`에 추가

- `npm install typescript -g`
  - 글로벌패키지에 추가(다른프로젝트에서 사용가능)

#### 2.3.5 `npm update`

설치한 패키지 업데이트

#### 2.3.6 `npm dedupe`

중복된 패키지 정리

#### 2.3.7 `npm list`

`npm ls` 와 동일

현재 설치된 패키지정보와 의존관계 확인

#### 2.3.8 `npm search`

패키지 검색
`ex) npm search typescript`

#### 2.3.9 `npm info`

패키지 정보 보기
`ex) npm info typescript`

#### 2.3.10 `npm uninstall`

패키지 삭제
`ex) npm uninstall typescript`

### 3.npm vs yarn

yarn이 페이스북, 구글의tilde의 엔지니어 그룹에서 만들었다고 한다.

패키지가 설치되면 일련의 작업을 수행한다. NPM에서 여러 패키지를 설치할 때, 패키지가 완전히 설치 될 때까지 기다린 후 다른 패키지를 설치한다. 즉, 작업은 패키지별로 순차적으로 실행된다.

하지만 YARN은 이러한 작업을 병렬로 설치하므로 퍼포먼스와 속도가 증가한다.
React를 설치했을 때, NPM과 YARN의 속도 차이

NPM — 3.572 seconds
YARN — 1.44 seconds

YARN이 현저하게 속도가 빠른 것을 알 수 있다

### 4. 로드맵 관련 

<https://roadmap.sh/>
<https://roadmap.sh/frontend>