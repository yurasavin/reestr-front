import { Space, Tag } from "antd";
import formatDateString from "../../helpers/formatDateString";
import useResource from "../../hooks/apis/useResource";
import Price from "../shared/Price";

const wrapString = (str) => {
  return str.length > 100 ? str.substr(0, 97) + "..." : str;
};

const ActiveFiltersTags = ({ filters, filterSetters }) => {
  const { data: categoriesResponse } = useResource(
    "categories/",
    {},
    { revalidateOnFocus: false }
  );

  const { data: tenderTypesResponse } = useResource(
    "tender_types/",
    {},
    { revalidateOnFocus: false }
  );

  const { data: branchesResponse } = useResource(
    "branches/",
    {},
    { revalidateOnFocus: false }
  );

  const okpdsResourceParams = {
    search: filters.debouncedOkpdSearchValueReal,
    limit: 100,
  };

  if (filters.okpds.length) {
    okpdsResourceParams.extra_ids = filters.okpds;
  }

  const { data: okpdsResponse, error } = useResource(
    "okpd2/",
    okpdsResourceParams,
    { revalidateOnFocus: false }
  );

  const { data: usersResponse } = useResource(
    "users/",
    { role__gte: 200 },
    { revalidateOnFocus: false }
  );

  const { data: initiatorsResponse } = useResource(
    "initiators/",
    {},
    { revalidateOnFocus: false }
  );

  return (
    <Space
      size={2}
      style={{
        padding: 5,
        border: "1px solid black",
        borderRadius: 10,
        marginBottom: 3,
        width: "100%",
      }}
    >
      <span style={{ fontWeight: 600 }}>Фильтры:</span>
      <Space size={0} wrap style={{ height: "5vh", overflowY: "auto" }}>
        <Tag>
          <strong>Год: </strong>
          {filters.year}
        </Tag>

        {filters.nameReal ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setName("");
            }}
          >
            <strong>Наименование: </strong>
            {wrapString(filters.nameReal)}
          </Tag>
        ) : null}

        {filters.status !== undefined ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.sasdasd();
              filterSetters.setStatus(undefined);
            }}
          >
            <strong>Статус заявки: </strong>
            {filters.status ? "В работе" : "Завершена"}
          </Tag>
        ) : null}

        {filters.dateFrom || filters.dateTo ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setDateFrom("");
              filterSetters.setDateTo("");
            }}
          >
            <strong>Дата заявки: </strong>
            {filters.dateFrom
              ? `с ${formatDateString(filters.dateFrom)} `
              : null}
            {filters.dateTo ? `по ${formatDateString(filters.dateTo)} ` : null}
          </Tag>
        ) : null}

        {filters.categories.length && categoriesResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setCategories([]);
            }}
          >
            <strong>Категории: </strong>
            {wrapString(
              filters.categories
                .map((id) => {
                  return categoriesResponse.data.filter(
                    (category) => category.id === id
                  )[0]?.name;
                })
                .join("; ")
            )}
          </Tag>
        ) : null}

        {filters.tenderTypes.length && tenderTypesResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setTenderTypes([]);
            }}
          >
            <strong>Способы закупки: </strong>
            {wrapString(
              filters.tenderTypes
                .map((value) => {
                  return tenderTypesResponse.data.filter(
                    (category) => category.value === value
                  )[0]?.label;
                })
                .join("; ")
            )}
          </Tag>
        ) : null}

        {filters.branches.length && branchesResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setBranches([]);
            }}
          >
            <strong>Филиалы: </strong>
            {wrapString(
              filters.branches
                .map((id) => {
                  return branchesResponse.data.filter(
                    (branch) => branch.id === id
                  )[0]?.name;
                })
                .join("; ")
            )}
          </Tag>
        ) : null}

        {filters.okpds.length && okpdsResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setOkpds([]);
            }}
          >
            <strong>ОКПД: </strong>
            {wrapString(
              filters.okpds
                .map((id) => {
                  return okpdsResponse.data.results.filter(
                    (okpd) => okpd.id === id
                  )[0]?.label;
                })
                .join("; ")
            )}
          </Tag>
        ) : null}

        {filters.users.length && usersResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setUsers([]);
            }}
          >
            <strong>Ответственные: </strong>
            {filters.users
              .map((id) => {
                return usersResponse.data.filter((user) => user.id === id)[0]
                  ?.last_name;
              })
              .join("; ")}
          </Tag>
        ) : null}

        {filters.initiators.length && initiatorsResponse?.data ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setInitiators([]);
            }}
          >
            <strong>Инициаторы: </strong>
            {wrapString(
              filters.initiators
                .map((id) => {
                  return initiatorsResponse.data.filter(
                    (initiator) => initiator.id === id
                  )[0]?.name;
                })
                .join("; ")
            )}
          </Tag>
        ) : null}

        {filters.tenderStatuses.length ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setTenderStatuses([]);
            }}
          >
            <strong>Статус закупки: </strong>
            {filters.tenderStatuses
              .map((value) => {
                return {
                  1: "Осуществляется",
                  2: "Завершена",
                  3: "Не состоялась",
                  4: "Отменена",
                }[value];
              })
              .join("; ")}
          </Tag>
        ) : null}

        {filters.tenderNumReal ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setTenderNum("");
            }}
          >
            <strong>Номер извещения: </strong>
            {filters.tenderNumReal}
          </Tag>
        ) : null}

        {filters.smp !== undefined ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setSmp(undefined);
            }}
          >
            <strong>СМП: </strong>
            {filters.smp ? "Да" : "Нет"}
          </Tag>
        ) : null}

        {filters.tenderPriceFromReal !== null ||
        filters.tenderPriceToReal !== null ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setTenderPriceFrom(null);
              filterSetters.setTenderPriceTo(null);
            }}
          >
            <strong>НМЦК: </strong>
            {filters.tenderPriceFromReal !== null
              ? [
                  "от ",
                  <Price
                    key="tenderPriceFromReal"
                    price={filters.tenderPriceFromReal}
                  />,
                ]
              : null}
            {filters.tenderPriceToReal !== null
              ? [
                  " до ",
                  <Price
                    key="tenderPriceToReal"
                    price={filters.tenderPriceToReal}
                  />,
                ]
              : null}
          </Tag>
        ) : null}

        {filters.contractNumReal ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setContractNum("");
            }}
          >
            <strong>Номер контракта: </strong>
            {filters.contractNumReal}
          </Tag>
        ) : null}

        {filters.contractDateFrom || filters.contractDateTo ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setContractDateFrom("");
              filterSetters.setContractDateTo("");
            }}
          >
            <strong>Дата контракта: </strong>
            {filters.contractDateFrom
              ? `с ${formatDateString(filters.contractDateFrom)} `
              : null}
            {filters.contractDateTo
              ? `по ${formatDateString(filters.contractDateTo)} `
              : null}
          </Tag>
        ) : null}

        {filters.contractPriceFromReal !== null ||
        filters.contractPriceToReal !== null ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setContractPriceFrom(null);
              filterSetters.setContractPriceTo(null);
            }}
          >
            <strong>НМЦК: </strong>
            {filters.contractPriceFromReal !== null
              ? [
                  "от ",
                  <Price
                    key="contractPriceFromReal"
                    price={filters.contractPriceFromReal}
                  />,
                ]
              : null}
            {filters.contractPriceToReal !== null
              ? [
                  " до ",
                  <Price
                    key="contractPriceToReal"
                    price={filters.contractPriceToReal}
                  />,
                ]
              : null}
          </Tag>
        ) : null}

        {filters.contractContractorReal ? (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              filterSetters.setContractContractor("");
            }}
          >
            <strong>Контрагент: </strong>
            {filters.contractContractorReal}
          </Tag>
        ) : null}
      </Space>
    </Space>
  );
};
export default ActiveFiltersTags;
