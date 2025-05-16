interface AdminCellLinkProps {
  cellData: string;
}

export function AdminCellLink(props: AdminCellLinkProps) {
  return (
    <a href={props.cellData} target="_blank" rel="noreferrer">
      {props.cellData}
    </a>
  );
}
