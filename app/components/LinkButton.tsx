import Link from "next/link";

type tipo = {
  to: string;
  className?: string;
  children: any;
  onclick?: any;
};

export function LinkButton(props: tipo) {
  return (
    <Link
      href={props.to}
      className={props.className}
      onClick={props.onclick}
      target="_blank"
    >
      {props.children}
    </Link>
  );
}
