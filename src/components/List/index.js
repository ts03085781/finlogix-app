import { ListCard, IconBtn } from "./styles";
import dayjs from "dayjs";

function List(props) {
    const { creatAt, title, contet, clickRegister } = props;

    const returnTime = () => {
        console.log("creatAt", dayjs(creatAt).add(10, "day"));
        return dayjs(creatAt).add(10, "day").format("YYYY/MM/dd hh:mm");
    };

    return (
        <ListCard>
            <div>
                <div className="date">{creatAt}</div>
                <div className="title">{title}</div>
                <div className="contet">{contet}</div>
                <div className="time">{returnTime()}</div>
            </div>
            <div className="register">
                <span>Register Now</span>
                <IconBtn onClick={clickRegister} />
            </div>
        </ListCard>
    );
}

export default List;
