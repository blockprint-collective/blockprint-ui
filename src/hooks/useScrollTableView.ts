import {useSetRecoilState} from 'recoil';

const useScrollTableView = (scrollCallback: () => void, atom) => {
    const setTableView = useSetRecoilState(atom)


    const scrollTableView = (view) => {
        scrollCallback();
        setTimeout(() => {
            setTableView(view)
        }, 1000)
    }

    return {
        scrollTableView
    }
}

export default useScrollTableView