enum TenderStatus {
  InProcess = 1,
  Finished = 2,
  NotHappen = 3,
  Cancelled = 4,
}

const TenderStatusDispalay: { [key in TenderStatus]: string } = {
  1: "Осуществляется",
  2: "Завершена",
  3: "Не состоялась",
  4: "Отменена",
} as const;

export { TenderStatus, TenderStatusDispalay };
