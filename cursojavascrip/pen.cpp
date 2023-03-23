#include <SFML/Graphics.hpp>
#include <cmath>

int main()
{
    // Definimos las constantes del péndulo
    const float g = 9.81f; // Aceleración debido a la gravedad en m/s^2
    const float L = 1.0f;  // Longitud del péndulo en metros
    const float theta0 = 45.0f * M_PI / 180.0f; // Ángulo inicial en radianes
    const float dt = 0.01f; // Paso de tiempo en segundos

    // Definimos las variables del péndulo
    float theta = theta0;  // Ángulo en radianes
    float omega = 0.0f;    // Velocidad angular en radianes/segundo
    float alpha = 0.0f;    // Aceleración angular en radianes/segundo^2

    // Creamos la ventana para mostrar la animación del péndulo
    sf::RenderWindow window(sf::VideoMode(800, 600), "Péndulo");

    // Definimos el punto de anclaje del péndulo y su longitud
    sf::Vector2f anchor(window.getSize().x / 2.0f, 100.0f);
    sf::Vertex anchorLine[] = { sf::Vertex(anchor), sf::Vertex(anchor + sf::Vector2f(0.0f, L * 100.0f)) };

    // Creamos un círculo para representar la masa del péndulo
    sf::CircleShape circle(20.0f);
    circle.setFillColor(sf::Color::Red);
    circle.setOrigin(20.0f, 20.0f);

    // Creamos un reloj para medir el tiempo transcurrido
    sf::Clock clock;

    while (window.isOpen())
    {
        // Manejamos los eventos de la ventana
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        // Calculamos la nueva posición angular del péndulo
        alpha = -g / L * sin(theta);
        omega += alpha * dt;
        theta += omega * dt;

        // Actualizamos la posición del círculo que representa la masa del péndulo
        circle.setPosition(anchor + sf::Vector2f(L * 100.0f * sin(theta), L * 100.0f * cos(theta)));

        // Limpiamos la ventana y la dibujamos de nuevo
        window.clear(sf::Color::White);
        window.draw(anchorLine, 2, sf::Lines);
        window.draw(circle);
        window.display();

        // Esperamos un poco para mantener una velocidad constante en la animación
        sf::Time elapsed = clock.getElapsedTime();
        sf::sleep(sf::seconds(dt) - elapsed);
        clock.restart();
    }

    return 0;
}