function clickToExit(clickedElement, elementIndetifier) {

  if (clickedElement.classList.contains(elementIndetifier)) {

    return true;
  }

  return false;
}

export default clickToExit;
