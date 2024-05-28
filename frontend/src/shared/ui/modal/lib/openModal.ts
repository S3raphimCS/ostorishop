export const openModal = (modalId: string) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    // @ts-ignore
    modal.showModal();
  }
};
