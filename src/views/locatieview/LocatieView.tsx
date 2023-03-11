import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import LocatieComponent from "../../components/locatiecomponent/LocatieComponent";
import { ILocation, ILocationsResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";
import { SearchComponent } from "../../components/searchcomponent/SearchComponent";

export const LocatieView = () => {
  const [location, getLocation] = useState<ILocationsResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const getLocations = async (newPage?: number, search?: string) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      const res = await await fetch(
        `${api}/location/?page=${newPage}&name=${search}`
      );
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
    getLocations(pageNumber, search);
  }, [pageNumber, search]);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={location?.info.pages}
      />
      <div>
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
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
