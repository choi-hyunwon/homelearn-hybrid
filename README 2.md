Vue 템플릿 로컬 빌드 방법
==================

# 1. Node.js 설치

 아래 주소로 이동하여 Node.js 설치.
 
* https://nodejs.org/dist/v12.16.1/

``` v12.16.1 버전 설치 (2020.03.05 기준)
` 개인별 사용 OS 맞는 버전 다운로드 
` 명령 프롬프트 시작하여 설치 됐는지 확인

## 2020.03.05 v10.18.1 -> v12.16.1 버전 업
* node.js 버전(v12.16.1)인 경우 ./frontend/package.json 에서 버전 확인 이전버전인 경우 '4.13.1'으로 버전 변경 후 'npm install' 진행필수
	- 참고
		- devDependencies : 'node-sass': '~4.13.1'
		- resolutions : 'sass-loader/node-sass': '~4.13.1' 


[ 노드 버전 확인 ] 
  node -v

[ npm 버전 확인 ] 
  npm -v
```
  
# 2. package.json으로부터 의존성 모듈 설치

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 의존성 모듈 설치.

* 경로 설정
	- 명령 프롬프트 에서 해당 프로젝트 frontend 경로로 이동 ( ex) cd C:/scm/workspace/프로젝트FO/frontend )
	- 프로젝트에서 frontend 폴더 선택 후 마우스 우클릭 'Show In -> Terminal' 선택
	
* yarn install 또는 npm install

# 5. 템플릿 빌드 및 서버구동

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 빌드 및 서버를 구동
 
