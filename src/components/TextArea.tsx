import React from "react";
import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: undefined;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles = { height: "200px", border: 0, resize: "none" };

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Introducir Texto";
  if (loading === true) return "Cargando";
  return "Traduccion";
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea" //que elemento debe renderizar
      placeholder={getPlaceholder({ type, loading })}
      disabled={type === SectionType.To}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
