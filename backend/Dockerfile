FROM eclipse-temurin:17.0.2_8-jdk as build

#USER root

#RUN groupadd --gid 1000 appuser \
#    && useradd --uid 1000 --gid appuser --shell /bin/bash --create-home appuser

#USER appuser

WORKDIR /back-end-quarkus

COPY . /back-end-quarkus


# build without test
RUN ./gradlew clean build -x test

#ENTRYPOINT ["tail", "-f", "/dev/null"]


FROM registry.access.redhat.com/ubi8/openjdk-17:1.11

ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en'

COPY --chown=185  --from=build /back-end-quarkus/build/quarkus-app/lib/ /deployments/lib/
COPY --chown=185 --from=build /back-end-quarkus/build/quarkus-app/*.jar /deployments/
COPY --chown=185 --from=build  /back-end-quarkus/build/quarkus-app/app/ /deployments/app/
COPY --chown=185 --from=build /back-end-quarkus/build/quarkus-app/quarkus/ /deployments/quarkus/

EXPOSE 8080
USER 185
ENV JAVA_OPTS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV JAVA_APP_JAR="/deployments/quarkus-run.jar"

