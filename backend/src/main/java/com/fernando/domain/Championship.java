package com.fernando.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Objects;


@Entity
public class Championship extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(name = "YEAR", unique = true)
    @NotNull(message = "The year is required")
    @Min(value = 2000, message = "The year must be greater than 2000")
    public Integer year;

    @Column(name = "DT_START", nullable = false)
    @NotNull(message = "The start date is required")
    @JsonbDateFormat("dd/MM/yyyy")
    public LocalDate startDate;

    @Column(name = "DT_END", nullable = false)
    @NotNull(message = "The end date is required")
    @JsonbDateFormat("dd/MM/yyyy")
    public LocalDate endDate;




    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Championship that = (Championship) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
