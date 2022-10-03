import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

// logo
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        {/* abre o modal quando clica no botao */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* botao de nova transação */}
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          {/* ajuda a colocar o conteudo do modal fora de todas as divs */}
          <Dialog.Portal>
            <Dialog.Overlay>
              <Dialog.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                {/* botao de fechar */}
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
