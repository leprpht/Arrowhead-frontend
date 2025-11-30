import "./Title.css"

type Props = {
  title: string;
}

export default function Title({title}: Props) {
  return <h2 className="title">{title}</h2>;
}