import { useEffect, useRef } from 'react'

function useClickOutside(handler: () => void, additionalTriggerElement?: Element) {

  const domNodeRef = useRef(null)

  useEffect(() => {

    function outsideHandler(event: Event) {

      if (!domNodeRef.current) return

      const refElement = domNodeRef.current as Element
      const eventElement = event.target as Element

      // conditionals
      const refElementIsDifferentFromEventElement = refElement !== eventElement;

      const refElementIsDifferentFromAdditionalTriggerElement = (
        refElement !== additionalTriggerElement);

      const refElementDoesntContainsAnEventElement = !refElement.contains(eventElement);

      const additionalTriggerElementDoesntContainsAnEventElement = (
        !additionalTriggerElement?.contains(eventElement));

      if (
        refElementIsDifferentFromEventElement
        && refElementIsDifferentFromAdditionalTriggerElement
        && refElementDoesntContainsAnEventElement
        && additionalTriggerElementDoesntContainsAnEventElement
      ) {
        handler()
      }
    }

    document.addEventListener('mousedown', outsideHandler)
    return () => { document.removeEventListener('mousedown', outsideHandler) }
  })

  return domNodeRef
}

export default useClickOutside
