import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import './CarouselPortifolio.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CarouselPortifolio() {
  const { imagensPort, setImagensPort } = useContext(GlobalContext);

  // Exclusão de imagens
  const [imagemParaExcluir, setImagemParaExcluir] = useState(null);
  function confirmarExclusao(event) {
    const id = Number(event.currentTarget.getAttribute('data-iddelimglivro'));
    setImagemParaExcluir(id);
    abrirModalExclusao();
  }

  function excluirImg() {
    if (imagemParaExcluir === null) return;

    setImagensPort((prevImgs) =>
      prevImgs.filter((img) => img.id !== imagemParaExcluir)
    );

    fecharModalExclusao();
    setImagemParaExcluir(null);
  }

  // Edição de imagens
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  function editarImg(event) {
    const idImgPort = Number(event.currentTarget.getAttribute('data-idimglivro'));
    const imagem = imagensPort.find((img) => img.id === idImgPort);
    setImagemSelecionada(imagem);
    abrirModalEdit();
  }

  function salvarEdicao() {
    if (!imagemSelecionada || !imagemSelecionada.id) return;

    console.log("Editando imagem:", imagemSelecionada);

    setImagensPort((prevImgs) =>
      prevImgs.map((img) =>
        img.id === imagemSelecionada.id
          ? { ...img, img: imagemSelecionada.img }
          : img
      )
    );

    fecharModalEdit();
    setImagemSelecionada(null);
  }

  // Modals
  const [modalIsOpen, setIsOpen] = useState(false);
  const abrirModal = () => setIsOpen(true);
  const fecharModal = () => setIsOpen(false);

  const [modalExcIsOpen, setModalExcOpen] = useState(false);
  const abrirModalExclusao = () => setModalExcOpen(true);
  const fecharModalExclusao = () => setModalExcOpen(false);

  const [modalEditIsOpen, setEditIsOpen] = useState(false);
  const abrirModalEdit = () => setEditIsOpen(true);
  const fecharModalEdit = () => setEditIsOpen(false);

  useEffect(() => {
    console.log("Imagens atualizadas:", imagensPort);
  }, [imagensPort]);

  return (
    <div className="carouselPort">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
        autoplay={{ stopOnLastSlide: false }}
      >
        {imagensPort.map((item) => (
          <SwiperSlide key={item.id}>
            <img className="imgsPortifolio" src={item.img} />
          </SwiperSlide>
        ))}
      </Swiper><br /><br />

      <div className="editDeleteButton">
        <button className="ButtonEditarImgs" onClick={abrirModal}>
          <label className="txtButtonEdtExc">Adicionar/Editar</label>
          <img className="imgButtonEdtExc" src="./icon_lapis1.svg" />
        </button>
      </div>

      <Modal
        className="ModalEdt/Exc/Adc"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        ariaHideApp={false}
      >
        <div className="containerModalPort">
          <button className="buttonFecharModal" onClick={fecharModal}>X</button>
          <label className="txtModalUm">Qual imagem deseja editar ou excluir?</label>
          <div className="barra1"></div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop
            autoplay={{ stopOnLastSlide: false }}
            className="swiperModal"
          >
            {imagensPort.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="imgsPortifolioModal" src={item.img} alt="" />
                <div className="buttonsEdit_Exc">
                  <button
                    className="excluirImg"
                    onClick={confirmarExclusao}
                    data-iddelimglivro={item.id}
                  >
                    <img src="./trash_icon.svg" alt="" />
                  </button>
                  <button
                    className="editarImg"
                    onClick={editarImg}
                    data-idimglivro={item.id}
                  >
                    <img src="./edit_icon.svg" alt="" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>

      {/* Modal de edição */}
      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={fecharModalEdit}
        ariaHideApp={false}
        className="modalEditImg"
      >
        <div className="containerModalEdit">
          <p className="txtModalEdit">Editar Imagem</p>

          {imagemSelecionada && (
            <>
              <img
                src={imagemSelecionada.img}
                alt="Imagem atual"
                className="preImagen"
              /><br /><br />

              <label className="txtEditImg" htmlFor="uploadInput">
                Selecione a imagem
              </label>

              <input
                id="uploadInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const novaURL = URL.createObjectURL(file);
                    setImagemSelecionada((prev) => ({
                      ...prev,
                      img: novaURL
                    }));
                  }
                }}
              />

              <div className="buttonsModalEdit">
                <button onClick={salvarEdicao} className="buttonSalvar">Alterar</button>
                <button onClick={fecharModalEdit} className="buttonFechar">Cancelar</button>
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Modal de exclusão */}
      <Modal
        isOpen={modalExcIsOpen}
        onRequestClose={fecharModalExclusao}
        ariaHideApp={false}
        className="modalExclusao"
      >
        <div className="containerExcImg">
          <img src="./icon_exclusao.svg" alt="" /><br />
          <div className="containerTxt">
            <label className="modalExcTxt1">Tem certeza?</label><br /><br />
            <label className="modalExcTxt2">
              Se confirmar não terá como recuperar o item
            </label><br /><br />
          </div>
          <div className="containerButtonsExc">
            <button onClick={excluirImg} className="buttonExc">Excluir</button>
            <button onClick={fecharModalExclusao} className="buttonCancelExc">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CarouselPortifolio;
