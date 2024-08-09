"use client";

import { Button } from "@/components/ui/button";

const ButtonUcsmERP = () => {
  return (
    <Button
      variant="link"
      onClick={() =>
        window.open("https://apps.ucsm.edu.pe/UCSMERP/tramites.php", "_blank")
      }
    >
      Click aquí
    </Button>
  );
};

export default ButtonUcsmERP;
