import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import LocatieComponent from "../../components/locatiecomponent/LocatieComponent";
import { ILocation, ILocationsResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";

export const LocatieView = () => {
  const [location, getLocation] = useState<ILocationsResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);

  const getLocations = async (newPage?: number) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      const res = await await fetch(`${api}/location/?page=${newPage}`);
      const resJson: ILocationsResponse = await res.json();
      console.log("res ", resJson);
      getLocation(resJson);
    } catch (error) {
      console.log("oeps   ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocations(pageNumber);
  }, [pageNumber]);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={location?.info.pages}
      />

      <PageWrapper isLoading={loading}>
        {location?.results.map(
          (perLocation: JSX.IntrinsicAttributes & ILocation) => (
            <LocatieComponent {...perLocation} key={perLocation.id} />
          )
        )}{" "}
      </PageWrapper>
    </>
  );
};
