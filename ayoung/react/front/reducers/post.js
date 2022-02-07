export const initialState = {
    mainPosts: [{ // 포스트 정보에 대한 객체 불러옴
        // 소문자(id, content-게시글 자체의 속성). 대문자(User, Images, Comments-다른정보들과 합쳐서 줌)
        // DB쪽에서 쓰는 시퀄라이즈라는 관계가 있음. 어떤 정보와 다른 정보가 관계가 있으면 그것들을 합쳐주고 앞의 첫 글자를 대문자로(백엔드와 사전협의)
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://blog.kakaocdn.net/dn/GQ3OO/btrdz8D03HQ/Jp6XNg1eX96BFJTcjdixtK/img.png',
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcFGGOcUAyfEFGlkrK5XCRHbHxZmSy1d2ZQ&usqp=CAU',
        }, {
            src: 'https://i.ytimg.com/vi/LqhvWTGjgzs/hqdefault.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와',
        }, {
            User: {
                nickname: 'nooo',
            },
            content: '얼른 사고싶어요',
        }],
    }],
    imagePaths: [], // 이미지 업로드할때 경로
    postAdded: false, // 게시글 추가가 완료됐을때 true로 변함
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = { // 예시 데이터
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], // dummyPost를 ...state.mainPosts뒤에다 쓰면 게시글 젤 밑에 추가됨
                postAdded: true,
            };
        default:
            return state;
    }
}

export default reducer;