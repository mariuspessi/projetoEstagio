import axios from "axios";
import toast from "react-toastify";
import React, { useRef, useEffect } from "react";

const formLagoa = ({ getUsers, onEdit, setOnEdit}) => {

    const ref = useRef();

    useEffect(() => {
        const user = ref.current;
          if (onEdit) {

            user.phPonto1L1.value = onEdit.data;
            user.phPonto1L2.value = onEdit.data;
            user.phPonto1L3.value = onEdit.data;
            user.phPonto1L4.value = onEdit.data;
            user.phPonto2L1.value = onEdit.data;
            user.phPonto2L2.value = onEdit.data;
            user.phPonto2L3.value = onEdit.data;
            user.phPonto2L4.value = onEdit.data;

          }
    )
    }
    return(

    );

}

export default formLagoa;
 