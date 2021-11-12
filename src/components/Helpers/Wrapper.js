//JSX 코드를 사용하지 않으므로 react를 import 하지 않음

const Wrapper = props => {
    return props.children
};

export default Wrapper;

//children은 모든 content를 가지고 있고 opening tag와 closing tag 사이에서 content를 return하고 있음
//Wrapper가 하는 것은 props.children을 리턴해주는 것