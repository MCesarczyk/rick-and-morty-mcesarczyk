import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DEMO_DELAY } from "../assets/variables";
import { setItemsList, setItemsState } from "../pages/itemsSlice";
import { fetchApiData } from "./fetchApiData";

export const useGetApiData = (url: string) => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    dispatch(setItemsState("loading"));
    const data = await fetchApiData(url);
    dispatch(setItemsList(data));

    setTimeout(() => {
      dispatch(setItemsState("success"));
    }, DEMO_DELAY);
  };

  useEffect(() => {
    getApiData();
  }, [url]);
};